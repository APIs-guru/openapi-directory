import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://cal-test.adyen.com/cal/services/Hop/v5"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * postGetOnboardingUrl - Get a link to a Adyen-hosted onboarding page.
     *
     * Returns a link to an Adyen-hosted onboarding page (HOP) that you can send to your account holder. For more information on how to use HOP, refer to [Hosted onboarding](https://docs.adyen.com/platforms/hosted-onboarding-page).
    **/
    postGetOnboardingUrl(req: operations.PostGetOnboardingUrlRequest, config?: AxiosRequestConfig): Promise<operations.PostGetOnboardingUrlResponse>;
    /**
     * postGetPciQuestionnaireUrl - Get a link to a PCI compliance questionnaire.
     *
     * Returns a link to a PCI compliance questionnaire that you can send to your account holder.
     *  > You should only use this endpoint if you have a [partner platform setup](https://docs.adyen.com/platforms/platforms-for-partners).
    **/
    postGetPciQuestionnaireUrl(req: operations.PostGetPciQuestionnaireUrlRequest, config?: AxiosRequestConfig): Promise<operations.PostGetPciQuestionnaireUrlResponse>;
}
export {};

import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Returns a link to an Adyen-hosted onboarding page (HOP) that you can send to your account holder. For more information on how to use HOP, refer to [Hosted onboarding](https://docs.adyen.com/platforms/hosted-onboarding-page).
    **/
    PostGetOnboardingUrl(req: operations.PostGetOnboardingUrlRequest, config?: AxiosRequestConfig): Promise<operations.PostGetOnboardingUrlResponse>;
    /**
     * Returns a link to a PCI compliance questionnaire that you can send to your account holder.
     *  > You should only use this endpoint if you have a [partner platform setup](https://docs.adyen.com/platforms/platforms-for-partners).
    **/
    PostGetPciQuestionnaireUrl(req: operations.PostGetPciQuestionnaireUrlRequest, config?: AxiosRequestConfig): Promise<operations.PostGetPciQuestionnaireUrlResponse>;
}
export {};

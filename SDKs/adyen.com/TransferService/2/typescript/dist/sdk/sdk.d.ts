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
     * Returns transactions that match the query parameters. The following query parameters are required when making a request:
     *
     * * One of `accountHolderId`, `balanceAccountId` or `balancePlatform`
     *
     * * `createdUntil`
     *
     * * `createdSince`
     *
     * This endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next page when applicable. You can use the links to page through the results. The response also returns links to the previous page when applicable.
    **/
    GetTransactions(req: operations.GetTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsResponse>;
    /**
     * Returns a specific transaction.
    **/
    GetTransactionsId(req: operations.GetTransactionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsIdResponse>;
    /**
     * Starts a request to transfer funds to [balance accounts](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts), [transfer instruments](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/transferInstruments), or bank accounts. Adyen sends the outcome of the transfer request through webhooks.
     *
     * To use this endpoint, you need an additional role for your API credential and transfers must be enabled for the source balance account. Your Adyen contact will set these up for you.
    **/
    PostTransfers(req: operations.PostTransfersRequest, config?: AxiosRequestConfig): Promise<operations.PostTransfersResponse>;
}
export {};

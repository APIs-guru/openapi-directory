import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://cal-test.adyen.com/cal/services/Account/v4"];
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
     * postCloseAccount - Close an account.
     *
     * Closes an account. If an account is closed, you cannot process transactions, pay out its funds, or reopen it. If payments are made to a closed account, the payments will be directed to your liable account.
    **/
    postCloseAccount(req: operations.PostCloseAccountRequest, config?: AxiosRequestConfig): Promise<operations.PostCloseAccountResponse>;
    /**
     * postCloseAccountHolder - Close an account holder.
     *
     * Changes the [status of an account holder](https://docs.adyen.com/platforms/account-holders-and-accounts#account-holder-statuses) to **Closed**. This state is final. If an account holder is closed, you can't process transactions, pay out funds, or reopen it. If payments are made to an account of an account holder with a **Closed** status,the payments will be directed to your liable account.
    **/
    postCloseAccountHolder(req: operations.PostCloseAccountHolderRequest, config?: AxiosRequestConfig): Promise<operations.PostCloseAccountHolderResponse>;
    /**
     * postCreateAccount - Create a new account.
     *
     * Creates an account under an account holder. An account holder can have [multiple accounts](https://docs.adyen.com/platforms/account-holders-and-accounts#create-additional-accounts).
    **/
    postCreateAccount(req: operations.PostCreateAccountRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateAccountResponse>;
    /**
     * postCreateAccountHolder - Create a new account holder.
     *
     * Creates an account holder, which [represents the sub-merchant's entity](https://docs.adyen.com/platforms/account-structure#your-platform) in your platform. The details that you need to provide in the request depend on the sub-merchant's legal entity type. For more information, refer to [Account holder and accounts](https://docs.adyen.com/platforms/account-holders-and-accounts#legal-entity-types).
    **/
    postCreateAccountHolder(req: operations.PostCreateAccountHolderRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateAccountHolderResponse>;
    /**
     * postDeleteBankAccounts - Delete bank accounts.
     *
     * Deletes one or more bank accounts of an account holder.
    **/
    postDeleteBankAccounts(req: operations.PostDeleteBankAccountsRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteBankAccountsResponse>;
    /**
     * postDeleteShareholders - Delete shareholders.
     *
     * Deletes one or more shareholders from an account holder.
    **/
    postDeleteShareholders(req: operations.PostDeleteShareholdersRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteShareholdersResponse>;
    /**
     * postDeleteSignatories - Delete signatories.
     *
     * Deletes one or more signatories from an account holder.
    **/
    postDeleteSignatories(req: operations.PostDeleteSignatoriesRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteSignatoriesResponse>;
    /**
     * postGetAccountHolder - Get an account holder.
     *
     * Retrieves the details of an account holder.
    **/
    postGetAccountHolder(req: operations.PostGetAccountHolderRequest, config?: AxiosRequestConfig): Promise<operations.PostGetAccountHolderResponse>;
    /**
     * postGetTaxForm - Get a tax form.
     *
     * Generates a tax form for account holders operating in the US. For more information, refer to [Providing tax forms](https://docs.adyen.com/platforms/tax-forms).
    **/
    postGetTaxForm(req: operations.PostGetTaxFormRequest, config?: AxiosRequestConfig): Promise<operations.PostGetTaxFormResponse>;
    /**
     * postGetUploadedDocuments - Get documents.
     *
     * Retrieves documents that were previously uploaded for an account holder. Adyen uses the documents in the [KYC verification checks](https://docs.adyen.com/platforms/verification-checks).
     *
    **/
    postGetUploadedDocuments(req: operations.PostGetUploadedDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.PostGetUploadedDocumentsResponse>;
    /**
     * postSuspendAccountHolder - Suspend an account holder.
     *
     * Changes the [status of an account holder](https://docs.adyen.com/platforms/account-holders-and-accounts#account-holder-statuses) to **Suspended**.
    **/
    postSuspendAccountHolder(req: operations.PostSuspendAccountHolderRequest, config?: AxiosRequestConfig): Promise<operations.PostSuspendAccountHolderResponse>;
    /**
     * postUnSuspendAccountHolder - Unsuspend an account holder.
     *
     * Changes the [status of an account holder](https://docs.adyen.com/platforms/account-holders-and-accounts#account-holder-statuses) from **Suspended** to **Inactive**. Account holders can have a **Suspended** status if you suspend them through the [`/suspendAccountHolder`](https://docs.adyen.com/api-explorer/#/Account/v5/post/suspendAccountHolder) endpoint or if a KYC deadline expires.
     *
     * You can only unsuspend account holders if they _do not_ have verification checks with a **FAILED** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status).
    **/
    postUnSuspendAccountHolder(req: operations.PostUnSuspendAccountHolderRequest, config?: AxiosRequestConfig): Promise<operations.PostUnSuspendAccountHolderResponse>;
    /**
     * postUpdateAccount - Update an account.
     *
     * Updates the description or payout schedule of an account.
    **/
    postUpdateAccount(req: operations.PostUpdateAccountRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateAccountResponse>;
    /**
     * postUpdateAccountHolder - Update an account holder.
     *
     * Updates the `accountHolderDetails` and `processingTier` of an account holder, and adds bank accounts and shareholders.
     *
     * When updating `accountHolderDetails`, parameters that are not included in the request are left unchanged except for the objects below.
     *
     * * `metadata`: Updating the metadata replaces the entire object. This means that to update an existing key-value pair, you must provide the changes along with other existing key-value pairs.
     *
     * When updating any field in the following objects, you must submit all the fields required for validation.
     *
     *  * `address`
     *
     * * `fullPhoneNumber`
     *
     * * `bankAccountDetails.BankAccountDetail`
     *
     * * `businessDetails.shareholders.ShareholderContact`
     *
     *  For example, to update the `address.postalCode`, you must also submit the `address.country`, `.city`, `.street`, `.postalCode`, and possibly `.stateOrProvince` so that the address can be validated.
     *
     * To add a bank account or shareholder, provide the bank account or shareholder details without a `bankAccountUUID` or a `shareholderCode`.
     *
     *
    **/
    postUpdateAccountHolder(req: operations.PostUpdateAccountHolderRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateAccountHolderResponse>;
    /**
     * postUpdateAccountHolderState - Update payout or processing state.
     *
     * Disables or enables the processing or payout state of an account holder.
    **/
    postUpdateAccountHolderState(req: operations.PostUpdateAccountHolderStateRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateAccountHolderStateResponse>;
    /**
     * postUploadDocument - Upload a document.
     *
     * Uploads a document for an account holder. Adyen uses the documents in the [KYC verification checks](https://docs.adyen.com/platforms/verification-checks).
    **/
    postUploadDocument(req: operations.PostUploadDocumentRequest, config?: AxiosRequestConfig): Promise<operations.PostUploadDocumentResponse>;
}
export {};

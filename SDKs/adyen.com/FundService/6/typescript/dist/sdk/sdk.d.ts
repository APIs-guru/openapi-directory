import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://cal-test.adyen.com/cal/services/Fund/v6"];
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
     * postAccountHolderBalance - Retrieve the balance(s) of an account holder.
     *
     * This endpoint is used to retrieve the balance(s) of the accounts of an account holder. An account's balances are on a per-currency basis (i.e., an account may have multiple balances: one per currency).
    **/
    postAccountHolderBalance(req: operations.PostAccountHolderBalanceRequest, config?: AxiosRequestConfig): Promise<operations.PostAccountHolderBalanceResponse>;
    /**
     * postAccountHolderTransactionList - Retrieve a list of transactions.
     *
     * This endpoint is used to retrieve a list of Transactions for an account holder's accounts. The accounts and Transaction Statuses to be included on the list can be specified. Each call will return a maximum of fifty (50) Transactions per account; in order to retrieve the following set of Transactions another call should be made with the 'page' value incremented. Note that Transactions are ordered with most recent first.
    **/
    postAccountHolderTransactionList(req: operations.PostAccountHolderTransactionListRequest, config?: AxiosRequestConfig): Promise<operations.PostAccountHolderTransactionListResponse>;
    /**
     * postDebitAccountHolder - Send a direct debit request.
     *
     * Sends a direct debit request to an account holder's bank account. If the direct debit is successful, the funds are settled in the accounts specified in the split instructions. Adyen sends the result of the direct debit in a [`DIRECT_DEBIT_INITIATED`](https://docs.adyen.com/api-explorer/#/NotificationService/latest/post/DIRECT_DEBIT_INITIATED) notification webhook.
     *
     *  To learn more about use cases, refer to [Top up accounts](https://docs.adyen.com/platforms/top-up-accounts).
    **/
    postDebitAccountHolder(req: operations.PostDebitAccountHolderRequest, config?: AxiosRequestConfig): Promise<operations.PostDebitAccountHolderResponse>;
    /**
     * postPayoutAccountHolder - Disburse a specified amount from an account to the account holder.
     *
     * This endpoint is used to pay out a specified amount from an account to the bank account of the account's account holder.
    **/
    postPayoutAccountHolder(req: operations.PostPayoutAccountHolderRequest, config?: AxiosRequestConfig): Promise<operations.PostPayoutAccountHolderResponse>;
    /**
     * postRefundFundsTransfer - Make a refund of the existing transfer funds transfer.
     *
     * This endpoint is used to refund funds transferred from one account to another. Both accounts must be in the same marketplace, but can have different account holders.
    **/
    postRefundFundsTransfer(req: operations.PostRefundFundsTransferRequest, config?: AxiosRequestConfig): Promise<operations.PostRefundFundsTransferResponse>;
    /**
     * postRefundNotPaidOutTransfers - Refund all transactions of an account since the most recent payout.
     *
     * This endpoint is used to refund all the transactions of an account which have taken place since the most recent payout. This request is on a per-account basis (as opposed to a per-payment basis), so only the portion of the payment which was made to the specified account will be refunded. The commission(s), fee(s), and payment(s) to other account(s), will remain in the accounts to which they were sent as designated by the original payment's split details.
    **/
    postRefundNotPaidOutTransfers(req: operations.PostRefundNotPaidOutTransfersRequest, config?: AxiosRequestConfig): Promise<operations.PostRefundNotPaidOutTransfersResponse>;
    /**
     * postSetupBeneficiary - Designate an account to be the beneficiary of a separate account and transfer the benefactor's current balance to the beneficiary.
     *
     * This endpoint is used to define a benefactor and a beneficiary relationship between two accounts. At the time of benefactor/beneficiary setup, the funds in the benefactor account are transferred to the beneficiary account, and any further payments to the benefactor account are automatically sent to the beneficiary account. Note that a series of benefactor/beneficiaries may not exceed four (4) beneficiaries and may not have a cycle in it.
    **/
    postSetupBeneficiary(req: operations.PostSetupBeneficiaryRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupBeneficiaryResponse>;
    /**
     * postTransferFunds - Transfer funds from one platform account to another.
     *
     * This endpoint is used to transfer funds from one account to another account. Both accounts must be in the same marketplace, but can have different account holders. The transfer must include a transfer code, which should be determined by the marketplace, in compliance with local regulations.
    **/
    postTransferFunds(req: operations.PostTransferFundsRequest, config?: AxiosRequestConfig): Promise<operations.PostTransferFundsResponse>;
}
export {};

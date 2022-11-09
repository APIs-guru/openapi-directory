import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    AssociateRepository(req: operations.AssociateRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.AssociateRepositoryResponse>;
    CreateCodeReview(req: operations.CreateCodeReviewRequest, config?: AxiosRequestConfig): Promise<operations.CreateCodeReviewResponse>;
    DescribeCodeReview(req: operations.DescribeCodeReviewRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCodeReviewResponse>;
    DescribeRecommendationFeedback(req: operations.DescribeRecommendationFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRecommendationFeedbackResponse>;
    DescribeRepositoryAssociation(req: operations.DescribeRepositoryAssociationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRepositoryAssociationResponse>;
    DisassociateRepository(req: operations.DisassociateRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateRepositoryResponse>;
    ListCodeReviews(req: operations.ListCodeReviewsRequest, config?: AxiosRequestConfig): Promise<operations.ListCodeReviewsResponse>;
    ListRecommendationFeedback(req: operations.ListRecommendationFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.ListRecommendationFeedbackResponse>;
    ListRecommendations(req: operations.ListRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.ListRecommendationsResponse>;
    ListRepositoryAssociations(req: operations.ListRepositoryAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.ListRepositoryAssociationsResponse>;
    ListTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    PutRecommendationFeedback(req: operations.PutRecommendationFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.PutRecommendationFeedbackResponse>;
    TagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    UntagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
export {};

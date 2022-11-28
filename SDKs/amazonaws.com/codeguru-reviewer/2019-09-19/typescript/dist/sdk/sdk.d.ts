import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://codeguru-reviewer.{region}.amazonaws.com", "https://codeguru-reviewer.{region}.amazonaws.com", "http://codeguru-reviewer.{region}.amazonaws.com.cn", "https://codeguru-reviewer.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * associateRepository - <p> Use to associate an Amazon Web Services CodeCommit repository or a repostory managed by Amazon Web Services CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a repository, CodeGuru Reviewer reviews source code changes in the repository's pull requests and provides automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/recommendations.html">Recommendations in Amazon CodeGuru Reviewer</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <p>If you associate a CodeCommit or S3 repository, it must be in the same Amazon Web Services Region and Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.</p> <p>Bitbucket and GitHub Enterprise Server repositories are managed by Amazon Web Services CodeStar Connections to connect to CodeGuru Reviewer. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-associate-repository.html">Associate a repository</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i> </p> <note> <p> You cannot use the CodeGuru Reviewer SDK or the Amazon Web Services CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate a GitHub repository, use the console. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-with-guru.html">Getting started with CodeGuru Reviewer</a> in the <i>CodeGuru Reviewer User Guide.</i> </p> </note>
    **/
    associateRepository(req: operations.AssociateRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.AssociateRepositoryResponse>;
    /**
     * createCodeReview -  Use to create a code review with a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html"> <code>CodeReviewType</code> </a> of <code>RepositoryAnalysis</code>. This type of code review analyzes all code under a specified branch in an associated repository. <code>PullRequest</code> code reviews are automatically triggered by a pull request.
    **/
    createCodeReview(req: operations.CreateCodeReviewRequest, config?: AxiosRequestConfig): Promise<operations.CreateCodeReviewResponse>;
    /**
     * describeCodeReview -  Returns the metadata associated with the code review along with its status.
    **/
    describeCodeReview(req: operations.DescribeCodeReviewRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCodeReviewResponse>;
    /**
     * describeRecommendationFeedback -  Describes the customer feedback for a CodeGuru Reviewer recommendation.
    **/
    describeRecommendationFeedback(req: operations.DescribeRecommendationFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRecommendationFeedbackResponse>;
    /**
     * describeRepositoryAssociation -  Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociation.html"> <code>RepositoryAssociation</code> </a> object that contains information about the requested repository association.
    **/
    describeRepositoryAssociation(req: operations.DescribeRepositoryAssociationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRepositoryAssociationResponse>;
    /**
     * disassociateRepository - Removes the association between Amazon CodeGuru Reviewer and a repository.
    **/
    disassociateRepository(req: operations.DisassociateRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateRepositoryResponse>;
    /**
     * listCodeReviews -  Lists all the code reviews that the customer has created in the past 90 days.
    **/
    listCodeReviews(req: operations.ListCodeReviewsRequest, config?: AxiosRequestConfig): Promise<operations.ListCodeReviewsResponse>;
    /**
     * listRecommendationFeedback -  Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html"> <code>RecommendationFeedbackSummary</code> </a> objects that contain customer recommendation feedback for all CodeGuru Reviewer users.
    **/
    listRecommendationFeedback(req: operations.ListRecommendationFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.ListRecommendationFeedbackResponse>;
    /**
     * listRecommendations -  Returns the list of all recommendations for a completed code review.
    **/
    listRecommendations(req: operations.ListRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.ListRecommendationsResponse>;
    /**
     * listRepositoryAssociations -  Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html"> <code>RepositoryAssociationSummary</code> </a> objects that contain summary information about a repository association. You can filter the returned list by <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-ProviderType"> <code>ProviderType</code> </a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Name"> <code>Name</code> </a>, <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-State"> <code>State</code> </a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RepositoryAssociationSummary.html#reviewer-Type-RepositoryAssociationSummary-Owner"> <code>Owner</code> </a>.
    **/
    listRepositoryAssociations(req: operations.ListRepositoryAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.ListRepositoryAssociationsResponse>;
    /**
     * listTagsForResource - Returns the list of tags associated with an associated repository resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * putRecommendationFeedback -  Stores customer feedback for a CodeGuru Reviewer recommendation. When this API is called again with different reactions the previous feedback is overwritten.
    **/
    putRecommendationFeedback(req: operations.PutRecommendationFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.PutRecommendationFeedbackResponse>;
    /**
     * tagResource - Adds one or more tags to an associated repository.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes a tag from an associated repository.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
export {};

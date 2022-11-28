import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://codestar.{region}.amazonaws.com", "https://codestar.{region}.amazonaws.com", "http://codestar.{region}.amazonaws.com.cn", "https://codestar.{region}.amazonaws.com.cn"];
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
     * associateTeamMember - Adds an IAM user to the team for an AWS CodeStar project.
    **/
    associateTeamMember(req: operations.AssociateTeamMemberRequest, config?: AxiosRequestConfig): Promise<operations.AssociateTeamMemberResponse>;
    /**
     * createProject - Creates a project, including project resources. This action creates a project based on a submitted project request. A set of source code files and a toolchain template file can be included with the project request. If these are not provided, an empty project is created.
    **/
    createProject(req: operations.CreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectResponse>;
    /**
     * createUserProfile - Creates a profile for a user that includes user preferences, such as the display name and email address assocciated with the user, in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar.
    **/
    createUserProfile(req: operations.CreateUserProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserProfileResponse>;
    /**
     * deleteProject - Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.
    **/
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * deleteUserProfile - Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.
    **/
    deleteUserProfile(req: operations.DeleteUserProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserProfileResponse>;
    /**
     * describeProject - Describes a project and its resources.
    **/
    describeProject(req: operations.DescribeProjectRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProjectResponse>;
    /**
     * describeUserProfile - Describes a user in AWS CodeStar and the user attributes across all projects.
    **/
    describeUserProfile(req: operations.DescribeUserProfileRequest, config?: AxiosRequestConfig): Promise<operations.DescribeUserProfileResponse>;
    /**
     * disassociateTeamMember - Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources. Disassociating a team member does not remove that user's profile from AWS CodeStar. It does not remove the user from IAM.
    **/
    disassociateTeamMember(req: operations.DisassociateTeamMemberRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateTeamMemberResponse>;
    /**
     * listProjects - Lists all projects in AWS CodeStar associated with your AWS account.
    **/
    listProjects(req: operations.ListProjectsRequest, config?: AxiosRequestConfig): Promise<operations.ListProjectsResponse>;
    /**
     * listResources - Lists resources associated with a project in AWS CodeStar.
    **/
    listResources(req: operations.ListResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListResourcesResponse>;
    /**
     * listTagsForProject - Gets the tags for a project.
    **/
    listTagsForProject(req: operations.ListTagsForProjectRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForProjectResponse>;
    /**
     * listTeamMembers - Lists all team members associated with a project.
    **/
    listTeamMembers(req: operations.ListTeamMembersRequest, config?: AxiosRequestConfig): Promise<operations.ListTeamMembersResponse>;
    /**
     * listUserProfiles - Lists all the user profiles configured for your AWS account in AWS CodeStar.
    **/
    listUserProfiles(req: operations.ListUserProfilesRequest, config?: AxiosRequestConfig): Promise<operations.ListUserProfilesResponse>;
    /**
     * tagProject - Adds tags to a project.
    **/
    tagProject(req: operations.TagProjectRequest, config?: AxiosRequestConfig): Promise<operations.TagProjectResponse>;
    /**
     * untagProject - Removes tags from a project.
    **/
    untagProject(req: operations.UntagProjectRequest, config?: AxiosRequestConfig): Promise<operations.UntagProjectResponse>;
    /**
     * updateProject - Updates a project in AWS CodeStar.
    **/
    updateProject(req: operations.UpdateProjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectResponse>;
    /**
     * updateTeamMember - Updates a team member's attributes in an AWS CodeStar project. For example, you can change a team member's role in the project, or change whether they have remote access to project resources.
    **/
    updateTeamMember(req: operations.UpdateTeamMemberRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTeamMemberResponse>;
    /**
     * updateUserProfile - Updates a user's profile in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar.
    **/
    updateUserProfile(req: operations.UpdateUserProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserProfileResponse>;
}
export {};

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    workspaceReadList?: shared.WorkspaceReadList;
}

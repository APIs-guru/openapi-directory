import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    workspaceReadList?: shared.WorkspaceReadList;
}

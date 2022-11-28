import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListVirtualInterfaceTestHistoryXAmzTargetEnum {
    OvertureServiceListVirtualInterfaceTestHistory = "OvertureService.ListVirtualInterfaceTestHistory"
}
export declare class ListVirtualInterfaceTestHistoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListVirtualInterfaceTestHistoryXAmzTargetEnum;
}
export declare class ListVirtualInterfaceTestHistoryRequest extends SpeakeasyBase {
    headers: ListVirtualInterfaceTestHistoryHeaders;
    request: shared.ListVirtualInterfaceTestHistoryRequest;
}
export declare class ListVirtualInterfaceTestHistoryResponse extends SpeakeasyBase {
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    listVirtualInterfaceTestHistoryResponse?: shared.ListVirtualInterfaceTestHistoryResponse;
    statusCode: number;
}

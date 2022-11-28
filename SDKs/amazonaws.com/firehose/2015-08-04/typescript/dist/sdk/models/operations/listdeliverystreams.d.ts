import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListDeliveryStreamsXAmzTargetEnum {
    Firehose20150804ListDeliveryStreams = "Firehose_20150804.ListDeliveryStreams"
}
export declare class ListDeliveryStreamsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDeliveryStreamsXAmzTargetEnum;
}
export declare class ListDeliveryStreamsRequest extends SpeakeasyBase {
    headers: ListDeliveryStreamsHeaders;
    request: shared.ListDeliveryStreamsInput;
}
export declare class ListDeliveryStreamsResponse extends SpeakeasyBase {
    contentType: string;
    listDeliveryStreamsOutput?: shared.ListDeliveryStreamsOutput;
    statusCode: number;
}

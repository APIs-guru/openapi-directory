import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const GETV1_SERVERS: string[];
export declare class GetV1QueryParams extends SpeakeasyBase {
    apiKey: string;
    fields?: string;
    ipAddress?: string;
}
export declare class GetV1Request extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: GetV1QueryParams;
}
export declare class GetV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse200?: shared.InlineResponse200;
}

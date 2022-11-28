import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAemHealthCheckQueryParams extends SpeakeasyBase {
    combineTagsOr?: boolean;
    tags?: string;
}
export declare class GetAemHealthCheckRequest extends SpeakeasyBase {
    queryParams: GetAemHealthCheckQueryParams;
}
export declare class GetAemHealthCheckResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAemHealthCheckDefaultApplicationJsonString?: string;
}

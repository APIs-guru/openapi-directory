import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ListFunctions20200531StageEnum {
    Development = "DEVELOPMENT",
    Live = "LIVE"
}
export declare class ListFunctions20200531QueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: string;
    stage?: ListFunctions20200531StageEnum;
}
export declare class ListFunctions20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFunctions20200531Request extends SpeakeasyBase {
    queryParams: ListFunctions20200531QueryParams;
    headers: ListFunctions20200531Headers;
}
export declare class ListFunctions20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

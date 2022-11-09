import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DescribeFunction20200531PathParams extends SpeakeasyBase {
    name: string;
}
export declare enum DescribeFunction20200531StageEnum {
    Development = "DEVELOPMENT",
    Live = "LIVE"
}
export declare class DescribeFunction20200531QueryParams extends SpeakeasyBase {
    stage?: DescribeFunction20200531StageEnum;
}
export declare class DescribeFunction20200531Headers extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeFunction20200531Request extends SpeakeasyBase {
    pathParams: DescribeFunction20200531PathParams;
    queryParams: DescribeFunction20200531QueryParams;
    headers: DescribeFunction20200531Headers;
}
export declare class DescribeFunction20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

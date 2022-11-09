import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TestFunction20200531PathParams extends SpeakeasyBase {
    name: string;
}
export declare class TestFunction20200531Headers extends SpeakeasyBase {
    ifMatch: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TestFunction20200531Request extends SpeakeasyBase {
    pathParams: TestFunction20200531PathParams;
    headers: TestFunction20200531Headers;
    request: Uint8Array;
}
export declare class TestFunction20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostConfigPropertyPathParams extends SpeakeasyBase {
    configNodeName: string;
}
export declare class PostConfigPropertyRequest extends SpeakeasyBase {
    pathParams: PostConfigPropertyPathParams;
}
export declare class PostConfigPropertyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

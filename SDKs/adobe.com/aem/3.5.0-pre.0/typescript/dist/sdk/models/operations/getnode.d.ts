import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNodePathParams extends SpeakeasyBase {
    name: string;
    path: string;
}
export declare class GetNodeRequest extends SpeakeasyBase {
    pathParams: GetNodePathParams;
}
export declare class GetNodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

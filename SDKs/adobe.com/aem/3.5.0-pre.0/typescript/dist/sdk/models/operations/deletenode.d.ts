import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteNodePathParams extends SpeakeasyBase {
    name: string;
    path: string;
}
export declare class DeleteNodeRequest extends SpeakeasyBase {
    pathParams: DeleteNodePathParams;
}
export declare class DeleteNodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

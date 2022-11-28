import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteAgentPathParams extends SpeakeasyBase {
    name: string;
    runmode: string;
}
export declare class DeleteAgentRequest extends SpeakeasyBase {
    pathParams: DeleteAgentPathParams;
}
export declare class DeleteAgentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

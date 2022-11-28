import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAgentPathParams extends SpeakeasyBase {
    name: string;
    runmode: string;
}
export declare class GetAgentRequest extends SpeakeasyBase {
    pathParams: GetAgentPathParams;
}
export declare class GetAgentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

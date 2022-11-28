import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAgentsPathParams extends SpeakeasyBase {
    runmode: string;
}
export declare class GetAgentsRequest extends SpeakeasyBase {
    pathParams: GetAgentsPathParams;
}
export declare class GetAgentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAgentsDefaultApplicationJsonString?: string;
}

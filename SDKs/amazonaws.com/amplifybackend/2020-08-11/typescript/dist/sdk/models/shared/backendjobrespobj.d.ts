import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The response object for this operation.
**/
export declare class BackendJobRespObj extends SpeakeasyBase {
    appId: string;
    backendEnvironmentName: string;
    createTime?: string;
    error?: string;
    jobId?: string;
    operation?: string;
    status?: string;
    updateTime?: string;
}

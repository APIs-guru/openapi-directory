import { SpeakeasyBase } from "../../../internal/utils";
import { BackendJobRespObj } from "./backendjobrespobj";
export declare class ListBackendJobsResponse extends SpeakeasyBase {
    jobs?: BackendJobRespObj[];
    nextToken?: string;
}

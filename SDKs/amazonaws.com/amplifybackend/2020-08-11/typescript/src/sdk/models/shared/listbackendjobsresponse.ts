import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackendJobRespObj } from "./backendjobrespobj";



export class ListBackendJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Jobs", elemType: BackendJobRespObj })
  jobs?: BackendJobRespObj[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

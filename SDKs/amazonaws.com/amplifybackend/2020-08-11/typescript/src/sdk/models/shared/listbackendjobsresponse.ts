import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BackendJobRespObj } from "./backendjobrespobj";


export class ListBackendJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Jobs", elemType: shared.BackendJobRespObj })
  jobs?: BackendJobRespObj[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}

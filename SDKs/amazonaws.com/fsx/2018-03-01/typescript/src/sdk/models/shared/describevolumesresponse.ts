import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Volume } from "./volume";


export class DescribeVolumesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Volumes", elemType: shared.Volume })
  volumes?: Volume[];
}

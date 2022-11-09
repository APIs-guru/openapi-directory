import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTestGridSessionActionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResult" })
  maxResult?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=sessionArn" })
  sessionArn: string;
}

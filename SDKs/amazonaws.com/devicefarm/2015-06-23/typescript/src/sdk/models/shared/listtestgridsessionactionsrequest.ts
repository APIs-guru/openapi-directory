import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTestGridSessionActionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxResult" })
  maxResult?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionArn" })
  sessionArn: string;
}

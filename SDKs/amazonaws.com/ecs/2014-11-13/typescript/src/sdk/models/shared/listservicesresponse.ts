import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceArns" })
  serviceArns?: string[];
}

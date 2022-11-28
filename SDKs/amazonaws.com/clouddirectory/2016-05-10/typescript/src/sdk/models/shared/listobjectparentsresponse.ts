import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListObjectParentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Parents" })
  parents?: Map<string, string>;
}

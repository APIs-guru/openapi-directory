import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateFunctionDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTimestamp" })
  creationTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedTimestamp" })
  lastUpdatedTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=LatestVersion" })
  latestVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=LatestVersionArn" })
  latestVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}

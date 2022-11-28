import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListFargateProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fargateProfileNames" })
  fargateProfileNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

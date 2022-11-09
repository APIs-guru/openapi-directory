import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListFargateProfilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=fargateProfileNames" })
  fargateProfileNames?: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}

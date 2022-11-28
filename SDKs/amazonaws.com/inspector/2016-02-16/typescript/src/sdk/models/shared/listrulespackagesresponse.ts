import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListRulesPackagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=rulesPackageArns" })
  rulesPackageArns: string[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListRulesPackagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=rulesPackageArns" })
  rulesPackageArns: string[];
}

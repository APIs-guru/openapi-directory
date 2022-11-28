import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Registry } from "./registry";



export class DescribeRegistriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=registries", elemType: Registry })
  registries: Registry[];
}

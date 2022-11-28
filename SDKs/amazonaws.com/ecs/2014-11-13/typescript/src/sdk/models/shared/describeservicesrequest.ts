import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceFieldEnum } from "./servicefieldenum";



export class DescribeServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=include" })
  include?: ServiceFieldEnum[];

  @SpeakeasyMetadata({ data: "json, name=services" })
  services: string[];
}

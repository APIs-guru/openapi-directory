import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceFieldEnum } from "./servicefieldenum";


export class DescribeServicesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=include" })
  include?: ServiceFieldEnum[];

  @Metadata({ data: "json, name=services" })
  services: string[];
}

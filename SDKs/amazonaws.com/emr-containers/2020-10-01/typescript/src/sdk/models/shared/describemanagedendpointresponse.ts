import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Endpoint } from "./endpoint";


export class DescribeManagedEndpointResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpoint" })
  endpoint?: Endpoint;
}

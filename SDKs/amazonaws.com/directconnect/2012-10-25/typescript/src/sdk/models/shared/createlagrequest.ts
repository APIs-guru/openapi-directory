import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";
import { Tag } from "./tag";


export class CreateLagRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=childConnectionTags", elemType: shared.Tag })
  childConnectionTags?: Tag[];

  @Metadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @Metadata({ data: "json, name=connectionsBandwidth" })
  connectionsBandwidth: string;

  @Metadata({ data: "json, name=lagName" })
  lagName: string;

  @Metadata({ data: "json, name=location" })
  location: string;

  @Metadata({ data: "json, name=numberOfConnections" })
  numberOfConnections: number;

  @Metadata({ data: "json, name=providerName" })
  providerName?: string;

  @Metadata({ data: "json, name=requestMACSec" })
  requestMacSec?: boolean;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}

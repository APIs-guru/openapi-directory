import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateLagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childConnectionTags", elemType: Tag })
  childConnectionTags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=connectionsBandwidth" })
  connectionsBandwidth: string;

  @SpeakeasyMetadata({ data: "json, name=lagName" })
  lagName: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=numberOfConnections" })
  numberOfConnections: number;

  @SpeakeasyMetadata({ data: "json, name=providerName" })
  providerName?: string;

  @SpeakeasyMetadata({ data: "json, name=requestMACSec" })
  requestMacSec?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}

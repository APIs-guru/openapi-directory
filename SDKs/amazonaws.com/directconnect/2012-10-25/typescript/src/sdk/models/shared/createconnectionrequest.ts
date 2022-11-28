import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandwidth" })
  bandwidth: string;

  @SpeakeasyMetadata({ data: "json, name=connectionName" })
  connectionName: string;

  @SpeakeasyMetadata({ data: "json, name=lagId" })
  lagId?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location: string;

  @SpeakeasyMetadata({ data: "json, name=providerName" })
  providerName?: string;

  @SpeakeasyMetadata({ data: "json, name=requestMACSec" })
  requestMacSec?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}

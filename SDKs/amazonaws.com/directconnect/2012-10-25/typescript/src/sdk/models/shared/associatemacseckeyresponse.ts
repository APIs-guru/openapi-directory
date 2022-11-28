import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MacSecKey } from "./macseckey";



export class AssociateMacSecKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=macSecKeys", elemType: MacSecKey })
  macSecKeys?: MacSecKey[];
}

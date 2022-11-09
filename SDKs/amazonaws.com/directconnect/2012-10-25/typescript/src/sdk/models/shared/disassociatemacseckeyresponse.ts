import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MacSecKey } from "./macseckey";


export class DisassociateMacSecKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @Metadata({ data: "json, name=macSecKeys", elemType: shared.MacSecKey })
  macSecKeys?: MacSecKey[];
}

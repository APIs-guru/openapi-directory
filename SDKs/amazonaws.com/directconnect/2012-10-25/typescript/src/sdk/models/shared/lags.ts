import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Lag } from "./lag";


export class Lags extends SpeakeasyBase {
  @Metadata({ data: "json, name=lags", elemType: shared.Lag })
  lags?: Lag[];
}

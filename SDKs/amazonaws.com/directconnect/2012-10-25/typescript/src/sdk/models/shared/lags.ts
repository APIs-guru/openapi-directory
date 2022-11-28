import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Lag } from "./lag";



export class Lags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lags", elemType: Lag })
  lags?: Lag[];
}

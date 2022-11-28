import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PiiEntity } from "./piientity";



export class DetectPiiEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Entities", elemType: PiiEntity })
  entities?: PiiEntity[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PiiEntity } from "./piientity";


export class DetectPiiEntitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Entities", elemType: shared.PiiEntity })
  entities?: PiiEntity[];
}

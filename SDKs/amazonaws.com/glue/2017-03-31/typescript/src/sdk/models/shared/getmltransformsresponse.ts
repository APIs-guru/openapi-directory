import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MlTransform } from "./mltransform";



export class GetMlTransformsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Transforms", elemType: MlTransform })
  transforms: MlTransform[];
}

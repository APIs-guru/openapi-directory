import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MlTransform } from "./mltransform";


export class GetMlTransformsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Transforms", elemType: shared.MlTransform })
  transforms: MlTransform[];
}

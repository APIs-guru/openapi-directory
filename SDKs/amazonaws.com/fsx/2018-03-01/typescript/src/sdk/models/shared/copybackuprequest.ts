import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CopyBackupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientRequestToken" })
  clientRequestToken?: string;

  @Metadata({ data: "json, name=CopyTags" })
  copyTags?: boolean;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=SourceBackupId" })
  sourceBackupId: string;

  @Metadata({ data: "json, name=SourceRegion" })
  sourceRegion?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
